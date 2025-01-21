import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo44Component } from './lib79-demo44.component';

describe('Lib79Demo44Component', () => {
  let component: Lib79Demo44Component;
  let fixture: ComponentFixture<Lib79Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
