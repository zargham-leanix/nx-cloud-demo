import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib43Demo4Component } from './lib43-demo4.component';

describe('Lib43Demo4Component', () => {
  let component: Lib43Demo4Component;
  let fixture: ComponentFixture<Lib43Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib43Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib43Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
