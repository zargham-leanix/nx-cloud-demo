import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Demo2Component } from './lib13-demo2.component';

describe('Lib13Demo2Component', () => {
  let component: Lib13Demo2Component;
  let fixture: ComponentFixture<Lib13Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib13Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
