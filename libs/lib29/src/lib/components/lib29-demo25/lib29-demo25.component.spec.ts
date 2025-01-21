import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo25Component } from './lib29-demo25.component';

describe('Lib29Demo25Component', () => {
  let component: Lib29Demo25Component;
  let fixture: ComponentFixture<Lib29Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
