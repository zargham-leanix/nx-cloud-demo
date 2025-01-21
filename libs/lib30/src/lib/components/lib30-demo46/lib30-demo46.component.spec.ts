import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib30Demo46Component } from './lib30-demo46.component';

describe('Lib30Demo46Component', () => {
  let component: Lib30Demo46Component;
  let fixture: ComponentFixture<Lib30Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib30Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib30Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
