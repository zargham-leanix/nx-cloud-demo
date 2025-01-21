import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo6Component } from './lib34-demo6.component';

describe('Lib34Demo6Component', () => {
  let component: Lib34Demo6Component;
  let fixture: ComponentFixture<Lib34Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
