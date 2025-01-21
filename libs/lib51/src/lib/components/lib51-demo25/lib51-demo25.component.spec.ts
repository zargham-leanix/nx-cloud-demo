import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib51Demo25Component } from './lib51-demo25.component';

describe('Lib51Demo25Component', () => {
  let component: Lib51Demo25Component;
  let fixture: ComponentFixture<Lib51Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib51Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib51Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
