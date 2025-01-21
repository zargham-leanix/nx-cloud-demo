import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib43Demo42Component } from './lib43-demo42.component';

describe('Lib43Demo42Component', () => {
  let component: Lib43Demo42Component;
  let fixture: ComponentFixture<Lib43Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib43Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib43Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
