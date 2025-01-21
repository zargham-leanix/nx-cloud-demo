import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib51Demo3Component } from './lib51-demo3.component';

describe('Lib51Demo3Component', () => {
  let component: Lib51Demo3Component;
  let fixture: ComponentFixture<Lib51Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib51Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib51Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
