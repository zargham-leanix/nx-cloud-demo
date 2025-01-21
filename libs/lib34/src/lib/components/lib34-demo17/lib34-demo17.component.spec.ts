import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo17Component } from './lib34-demo17.component';

describe('Lib34Demo17Component', () => {
  let component: Lib34Demo17Component;
  let fixture: ComponentFixture<Lib34Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
