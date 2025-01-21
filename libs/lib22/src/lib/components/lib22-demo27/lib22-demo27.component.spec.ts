import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo27Component } from './lib22-demo27.component';

describe('Lib22Demo27Component', () => {
  let component: Lib22Demo27Component;
  let fixture: ComponentFixture<Lib22Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
