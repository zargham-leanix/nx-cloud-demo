import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib45Demo14Component } from './lib45-demo14.component';

describe('Lib45Demo14Component', () => {
  let component: Lib45Demo14Component;
  let fixture: ComponentFixture<Lib45Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib45Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib45Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
