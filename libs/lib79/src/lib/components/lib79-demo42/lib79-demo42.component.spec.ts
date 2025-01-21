import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo42Component } from './lib79-demo42.component';

describe('Lib79Demo42Component', () => {
  let component: Lib79Demo42Component;
  let fixture: ComponentFixture<Lib79Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
