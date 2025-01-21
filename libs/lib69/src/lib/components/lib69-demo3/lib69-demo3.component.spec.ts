import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo3Component } from './lib69-demo3.component';

describe('Lib69Demo3Component', () => {
  let component: Lib69Demo3Component;
  let fixture: ComponentFixture<Lib69Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
