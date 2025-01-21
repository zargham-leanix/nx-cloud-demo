import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo46Component } from './lib72-demo46.component';

describe('Lib72Demo46Component', () => {
  let component: Lib72Demo46Component;
  let fixture: ComponentFixture<Lib72Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
