import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib51Demo44Component } from './lib51-demo44.component';

describe('Lib51Demo44Component', () => {
  let component: Lib51Demo44Component;
  let fixture: ComponentFixture<Lib51Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib51Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib51Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
