import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib43Demo48Component } from './lib43-demo48.component';

describe('Lib43Demo48Component', () => {
  let component: Lib43Demo48Component;
  let fixture: ComponentFixture<Lib43Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib43Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib43Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
