import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo9Component } from './lib69-demo9.component';

describe('Lib69Demo9Component', () => {
  let component: Lib69Demo9Component;
  let fixture: ComponentFixture<Lib69Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
