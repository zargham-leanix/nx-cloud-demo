import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo46Component } from './lib21-demo46.component';

describe('Lib21Demo46Component', () => {
  let component: Lib21Demo46Component;
  let fixture: ComponentFixture<Lib21Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
