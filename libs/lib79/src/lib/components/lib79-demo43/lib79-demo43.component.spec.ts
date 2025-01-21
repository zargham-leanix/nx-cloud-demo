import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo43Component } from './lib79-demo43.component';

describe('Lib79Demo43Component', () => {
  let component: Lib79Demo43Component;
  let fixture: ComponentFixture<Lib79Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
