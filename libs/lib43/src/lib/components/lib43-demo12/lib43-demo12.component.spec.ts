import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib43Demo12Component } from './lib43-demo12.component';

describe('Lib43Demo12Component', () => {
  let component: Lib43Demo12Component;
  let fixture: ComponentFixture<Lib43Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib43Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib43Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
