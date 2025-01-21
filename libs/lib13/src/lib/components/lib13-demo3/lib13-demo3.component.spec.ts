import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Demo3Component } from './lib13-demo3.component';

describe('Lib13Demo3Component', () => {
  let component: Lib13Demo3Component;
  let fixture: ComponentFixture<Lib13Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib13Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
