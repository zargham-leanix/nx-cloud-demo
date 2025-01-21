import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo42Component } from './lib89-demo42.component';

describe('Lib89Demo42Component', () => {
  let component: Lib89Demo42Component;
  let fixture: ComponentFixture<Lib89Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
