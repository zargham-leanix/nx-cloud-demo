import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo27Component } from './lib64-demo27.component';

describe('Lib64Demo27Component', () => {
  let component: Lib64Demo27Component;
  let fixture: ComponentFixture<Lib64Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
