import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib51Demo13Component } from './lib51-demo13.component';

describe('Lib51Demo13Component', () => {
  let component: Lib51Demo13Component;
  let fixture: ComponentFixture<Lib51Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib51Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib51Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
