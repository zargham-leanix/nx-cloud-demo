import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib93Demo46Component } from './lib93-demo46.component';

describe('Lib93Demo46Component', () => {
  let component: Lib93Demo46Component;
  let fixture: ComponentFixture<Lib93Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib93Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib93Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
