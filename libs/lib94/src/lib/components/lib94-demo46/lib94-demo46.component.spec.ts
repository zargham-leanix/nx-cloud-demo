import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo46Component } from './lib94-demo46.component';

describe('Lib94Demo46Component', () => {
  let component: Lib94Demo46Component;
  let fixture: ComponentFixture<Lib94Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
