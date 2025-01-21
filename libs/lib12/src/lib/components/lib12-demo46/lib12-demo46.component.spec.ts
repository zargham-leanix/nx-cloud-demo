import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib12Demo46Component } from './lib12-demo46.component';

describe('Lib12Demo46Component', () => {
  let component: Lib12Demo46Component;
  let fixture: ComponentFixture<Lib12Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib12Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib12Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
