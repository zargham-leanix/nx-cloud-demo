import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib30Demo25Component } from './lib30-demo25.component';

describe('Lib30Demo25Component', () => {
  let component: Lib30Demo25Component;
  let fixture: ComponentFixture<Lib30Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib30Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib30Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
