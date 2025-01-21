import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo27Component } from './lib34-demo27.component';

describe('Lib34Demo27Component', () => {
  let component: Lib34Demo27Component;
  let fixture: ComponentFixture<Lib34Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
