import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Demo17Component } from './lib13-demo17.component';

describe('Lib13Demo17Component', () => {
  let component: Lib13Demo17Component;
  let fixture: ComponentFixture<Lib13Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib13Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
