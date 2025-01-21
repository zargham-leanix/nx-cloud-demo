import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Demo25Component } from './lib63-demo25.component';

describe('Lib63Demo25Component', () => {
  let component: Lib63Demo25Component;
  let fixture: ComponentFixture<Lib63Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib63Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
