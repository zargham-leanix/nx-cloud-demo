import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo46Component } from './lib95-demo46.component';

describe('Lib95Demo46Component', () => {
  let component: Lib95Demo46Component;
  let fixture: ComponentFixture<Lib95Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
