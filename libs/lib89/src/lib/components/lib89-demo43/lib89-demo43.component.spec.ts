import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo43Component } from './lib89-demo43.component';

describe('Lib89Demo43Component', () => {
  let component: Lib89Demo43Component;
  let fixture: ComponentFixture<Lib89Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
