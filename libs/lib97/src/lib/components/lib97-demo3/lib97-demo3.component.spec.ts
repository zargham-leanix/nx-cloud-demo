import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Demo3Component } from './lib97-demo3.component';

describe('Lib97Demo3Component', () => {
  let component: Lib97Demo3Component;
  let fixture: ComponentFixture<Lib97Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib97Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
