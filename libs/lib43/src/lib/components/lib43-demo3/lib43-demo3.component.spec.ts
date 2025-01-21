import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib43Demo3Component } from './lib43-demo3.component';

describe('Lib43Demo3Component', () => {
  let component: Lib43Demo3Component;
  let fixture: ComponentFixture<Lib43Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib43Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib43Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
