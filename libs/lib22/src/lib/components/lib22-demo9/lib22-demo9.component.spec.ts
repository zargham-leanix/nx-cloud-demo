import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo9Component } from './lib22-demo9.component';

describe('Lib22Demo9Component', () => {
  let component: Lib22Demo9Component;
  let fixture: ComponentFixture<Lib22Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
