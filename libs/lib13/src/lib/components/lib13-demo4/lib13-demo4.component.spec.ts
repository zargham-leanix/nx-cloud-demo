import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Demo4Component } from './lib13-demo4.component';

describe('Lib13Demo4Component', () => {
  let component: Lib13Demo4Component;
  let fixture: ComponentFixture<Lib13Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib13Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
