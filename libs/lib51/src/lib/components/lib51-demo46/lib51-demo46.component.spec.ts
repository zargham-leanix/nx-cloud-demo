import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib51Demo46Component } from './lib51-demo46.component';

describe('Lib51Demo46Component', () => {
  let component: Lib51Demo46Component;
  let fixture: ComponentFixture<Lib51Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib51Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib51Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
