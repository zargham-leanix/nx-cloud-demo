import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo17Component } from './lib89-demo17.component';

describe('Lib89Demo17Component', () => {
  let component: Lib89Demo17Component;
  let fixture: ComponentFixture<Lib89Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
