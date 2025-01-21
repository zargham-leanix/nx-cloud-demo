import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib45Demo44Component } from './lib45-demo44.component';

describe('Lib45Demo44Component', () => {
  let component: Lib45Demo44Component;
  let fixture: ComponentFixture<Lib45Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib45Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib45Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
