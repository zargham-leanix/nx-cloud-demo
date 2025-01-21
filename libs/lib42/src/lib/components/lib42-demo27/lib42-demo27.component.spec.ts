import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo27Component } from './lib42-demo27.component';

describe('Lib42Demo27Component', () => {
  let component: Lib42Demo27Component;
  let fixture: ComponentFixture<Lib42Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
