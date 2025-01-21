import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo3Component } from './lib79-demo3.component';

describe('Lib79Demo3Component', () => {
  let component: Lib79Demo3Component;
  let fixture: ComponentFixture<Lib79Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
