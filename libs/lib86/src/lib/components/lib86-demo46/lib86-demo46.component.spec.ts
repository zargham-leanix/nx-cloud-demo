import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Demo46Component } from './lib86-demo46.component';

describe('Lib86Demo46Component', () => {
  let component: Lib86Demo46Component;
  let fixture: ComponentFixture<Lib86Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib86Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
