import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Demo14Component } from './lib13-demo14.component';

describe('Lib13Demo14Component', () => {
  let component: Lib13Demo14Component;
  let fixture: ComponentFixture<Lib13Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib13Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
