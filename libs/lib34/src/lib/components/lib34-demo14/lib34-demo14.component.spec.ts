import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo14Component } from './lib34-demo14.component';

describe('Lib34Demo14Component', () => {
  let component: Lib34Demo14Component;
  let fixture: ComponentFixture<Lib34Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
