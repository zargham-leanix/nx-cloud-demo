import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo2Component } from './lib34-demo2.component';

describe('Lib34Demo2Component', () => {
  let component: Lib34Demo2Component;
  let fixture: ComponentFixture<Lib34Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
