import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo19Component } from './lib4-demo19.component';

describe('Lib4Demo19Component', () => {
  let component: Lib4Demo19Component;
  let fixture: ComponentFixture<Lib4Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
