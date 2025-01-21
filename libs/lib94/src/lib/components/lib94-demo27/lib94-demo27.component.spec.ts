import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo27Component } from './lib94-demo27.component';

describe('Lib94Demo27Component', () => {
  let component: Lib94Demo27Component;
  let fixture: ComponentFixture<Lib94Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
