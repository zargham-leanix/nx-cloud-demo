import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib98Demo3Component } from './lib98-demo3.component';

describe('Lib98Demo3Component', () => {
  let component: Lib98Demo3Component;
  let fixture: ComponentFixture<Lib98Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib98Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib98Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
