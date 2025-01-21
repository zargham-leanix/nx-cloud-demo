import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo3Component } from './lib70-demo3.component';

describe('Lib70Demo3Component', () => {
  let component: Lib70Demo3Component;
  let fixture: ComponentFixture<Lib70Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
