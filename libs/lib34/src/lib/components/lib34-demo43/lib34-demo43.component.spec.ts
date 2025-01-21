import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo43Component } from './lib34-demo43.component';

describe('Lib34Demo43Component', () => {
  let component: Lib34Demo43Component;
  let fixture: ComponentFixture<Lib34Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
