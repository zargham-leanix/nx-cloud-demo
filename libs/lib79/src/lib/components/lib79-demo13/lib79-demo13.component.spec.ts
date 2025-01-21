import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo13Component } from './lib79-demo13.component';

describe('Lib79Demo13Component', () => {
  let component: Lib79Demo13Component;
  let fixture: ComponentFixture<Lib79Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
